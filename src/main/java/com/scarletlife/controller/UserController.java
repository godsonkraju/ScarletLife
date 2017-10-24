package com.scarletlife.controller;

import com.scarletlife.model.User;
import com.scarletlife.persistance.UserDao;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
public class UserController {
    static UserDao userDao = new UserDao();

    /**
     * GET all the users
     *
     * @return
     */
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userDao.getUsers();
    }

    /**
     * GET a user by username
     *
     * @param username
     * @return
     */
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User getUserByUsername(@RequestParam(value = "username", required = true) String username) {
        return userDao.getUserByUsername(username);
    }

    /**
     * Save the user in the database
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        if (userDao.getUserByUsername(user.getUsername()) == null) {
            userDao.save(user);
        }
        return user;
    }

    /**
     * Add the levelId to the user's favorites arraylist
     *
     * @param username
     * @param levelId
     * @return
     */
    @RequestMapping(value = "/users/addToFavorites/{username}/{levelId}", method = RequestMethod.GET)
    public User addToFavoriteLevels(@PathVariable("username") String username,
                                    @PathVariable("levelId") String levelId) {
        User user = userDao.getUserByUsername(username);
        if (!user.getFavorites().contains(levelId)) {
            user.getFavorites().add(levelId);
            userDao.save(user);
        }
        return user;
    }

    /**
     * Remove the levelId from the user's favorites arraylist
     *
     * @param username
     * @param levelId
     * @return
     */
    @RequestMapping(value = "/users/removeFromFavorites/{username}/{levelId}", method = RequestMethod.GET)
    public User addRemoveFromFavoriteLevels(@PathVariable("username") String username,
                                            @PathVariable("levelId") String levelId) {
        User user = userDao.getUserByUsername(username);
        user.getFavorites().remove(levelId);
        userDao.save(user);
        return user;
    }

    /**
     * Add the levelId to the user's campaign arraylist
     *
     * @param username
     * @param levelId
     * @return
     */
    @RequestMapping(value = "/users/addToCampaign/{username}/{levelId}", method = RequestMethod.GET)
    public User addToCampaignLevels(@PathVariable("username") String username,
                                    @PathVariable("levelId") String levelId) {
        User user = userDao.getUserByUsername(username);
        if (!user.getCampaign().contains(levelId)) {
            user.getCampaign().add(levelId);
            userDao.save(user);
        }
        return user;
    }

    /**
     * Update user
     *
     * @param id
     * @param updatedUser
     * @return
     */
    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public User updateUser(@PathVariable("id") String id, @RequestBody User updatedUser) {
        return userDao.update(id, updatedUser);
    }

    /**
     * Delete user
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public User deleteUser(@PathVariable("id") String id) {
        return userDao.deleteById(id);
    }


    /*@RequestMapping(value="/clearUsersDB", method = RequestMethod.DELETE)
    public void deleteAllUsers() {
        userDao.deleteAllUsers();
    }*/

}
