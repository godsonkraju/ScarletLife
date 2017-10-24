package com.scarletlife.controller;

import com.scarletlife.model.DatastoreLevel;
import com.scarletlife.model.Level;
import com.scarletlife.model.Spaceship;
import com.scarletlife.model.User;
import com.scarletlife.persistance.LevelDao;
import com.scarletlife.persistance.UserDao;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Level Controller has CRUD rest endpoints level object
 */

@CrossOrigin()
@RestController
public class LevelController {
    static LevelDao levelDao = new LevelDao();
    static UserDao userDao = new UserDao();

    /**
     * GET all levels. Filter by title or levelType if query params exist
     *
     * @param title
     * @param levelType
     * @return
     */
    @RequestMapping(value = "/levels", method = RequestMethod.GET)
    public List<Level> getAllLevels(@RequestParam(value = "title", required = false) String title,
                                    @RequestParam(value = "levelType", required = false) String levelType) {
        if (title != null) {
            return levelDao.getLevelByTitle(title);
        } else if (levelType != null) {
            return levelDao.getLevelByType(levelType);
        } else {
            return levelDao.getLevels();
        }
    }

    /**
     * GET all custom public levels. Filter by title or sort if query params exist
     *
     * @param title
     * @param sort
     * @return
     */
    @RequestMapping(value = "/levels/explore", method = RequestMethod.GET)
    public List<Level> getExploreLevels(@RequestParam(value = "title", required = false) String title,
                                        @RequestParam(value = "sort", required = false) String sort) {
        if (title != null) {
            return levelDao.getExploreLevelsByTitle(title);
        } else if (sort != null) {
            return levelDao.getSortedExploreLevels(sort);
        }
        return levelDao.getExploreLevels();
    }

    /**
     * GET levels created by a particular user. Filter by title or sort if query params exist.
     *
     * @param username
     * @param title
     * @param sort
     * @return
     */
    @RequestMapping(value = "/levels/mylevels", method = RequestMethod.GET)
    public List<Level> getExploreLevels(@RequestParam(value = "username", required = true) String username,
                                        @RequestParam(value = "title", required = false) String title,
                                        @RequestParam(value = "sort", required = false) String sort) {
        if (title != null) {
            return levelDao.getMyLevelsByTitle(username, title);
        } else if (sort != null) {
            return levelDao.getSortedMyLevels(username, sort);
        }
        return levelDao.getMyLevels(username);
    }

    /**
     * GET all the levels based on the particular users favorite arraylist. Filter by title or sort if query params exist.
     *
     * @param username
     * @param title
     * @param sort
     * @return
     */
    @RequestMapping(value = "/levels/favorites", method = RequestMethod.GET)
    public List<Level> getFavoriteLevels(@RequestParam(value = "username", required = true) String username,
                                         @RequestParam(value = "title", required = false) String title,
                                         @RequestParam(value = "sort", required = false) String sort) {
        List<Level> favoriteLevels = new ArrayList<>();
        if (userDao.getUserByUsername(username) != null) {
            if (title != null) {
                favoriteLevels = levelDao.getFavoritesByTitle(userDao.getUserByUsername(username).getFavorites(), title);
            } else if (sort != null) {
                favoriteLevels = levelDao.getSortedFavorites(userDao.getUserByUsername(username).getFavorites(), sort);
            } else {
                favoriteLevels = levelDao.getFavorites(userDao.getUserByUsername(username).getFavorites());
                System.out.println(favoriteLevels);

            }
        }

        return favoriteLevels;
    }

    /**
     * GET a level by id
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/levels/{id}", method = RequestMethod.GET)
    public Level getLevelById(@PathVariable("id") String id) {
        return levelDao.getLevelById(id);
    }

    /**
     * Save a level
     *
     * @param level
     * @return
     */
    @RequestMapping(value = "/levels", method = RequestMethod.POST)
    public Level addLevel(@RequestBody Level level) {
        levelDao.save(level);
        return level;
    }

    @RequestMapping(value = "/levels/{id}", method = RequestMethod.PUT)
    public Level updateLevel(@PathVariable("id") String id, @RequestBody Level updatedLevel) {
        levelDao.update(id, updatedLevel);
        return updatedLevel;
    }

    @RequestMapping(value = "/levels/{id}", method = RequestMethod.DELETE)
    public Boolean deleteLevel(@PathVariable("id") String id) {
        levelDao.deleteById(id);
        return true;
    }

    /*@RequestMapping(value="/clearLevelsDB", method = RequestMethod.DELETE)
    public void deleteAllLevels() {
        levelDao.deleteAllLevels();
    }
    */


}
