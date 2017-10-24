package com.scarletlife.persistance;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.scarletlife.model.DatastoreLevel;
import com.scarletlife.model.Level;
import com.scarletlife.model.User;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

/**
 * Handles all level related database operations
 */
public class LevelDao {


    /**
     * Get all the levels
     *
     * @return List of levels
     */
    public List<Level> getLevels() {
        List<DatastoreLevel> datastoreLevels = ObjectifyService.ofy().load().type(DatastoreLevel.class).order("title").list();
        return convertToLevelList(datastoreLevels);
    }


    /**
     * Get level by id
     *
     * @param id
     * @return Level
     */
    public Level getLevelById(String id) {
        DatastoreLevel datastoreLevel = ObjectifyService.ofy().load().key(Key.create(DatastoreLevel.class, id)).now();
        return convertToLevel(datastoreLevel);
    }

    /**
     * Get levels by title
     *
     * @param title
     * @return List of levels
     */
    public List<Level> getLevelByTitle(String title) {
        List<DatastoreLevel> datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("title =", title).list();
        return convertToLevelList(datastoreLevel);
    }

    /**
     * Get level by type
     *
     * @param levelType
     * @return List of levels
     */
    public List<Level> getLevelByType(String levelType) {
        List<DatastoreLevel> datastoreLevelList = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("levelType =", levelType).order("title").list();
        return convertToLevelList(datastoreLevelList);
    }

    /**
     * Get public levels of type 'custom'
     *
     * @return List of levels
     */
    public List<Level> getExploreLevels() {
        List<DatastoreLevel> datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("levelType =", "custom").filter("privateLevel =", false).list();
        return convertToLevelList(datastoreLevel);
    }

    /**
     * Get public levels of type 'custom' by title
     *
     * @param title
     * @returnm List of levels
     */
    public List<Level> getExploreLevelsByTitle(String title) {
        List<DatastoreLevel> datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("levelType =", "custom").filter("privateLevel =", false).filter("title =", title).list();
        return convertToLevelList(datastoreLevel);
    }

    /**
     * Get sorted public levels of type 'custom'
     *
     * @param sort
     * @return sorted list of levels
     */
    public List<Level> getSortedExploreLevels(String sort) {
        //List<DatastoreLevel> datastoreLevelList =  ObjectifyService.ofy().load().type(DatastoreLevel.class).order("-timeCreated").list();
        List<DatastoreLevel> datastoreLevelList = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("levelType =", "custom").filter("privateLevel =", false).order(sort).list();
        return convertToLevelList(datastoreLevelList);
    }

    /**
     * Get levels created by a particular user
     *
     * @param username
     * @return list of levels by user
     */
    public List<Level> getMyLevels(String username) {
        List<DatastoreLevel> datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("creator =", username).list();
        return convertToLevelList(datastoreLevel);
    }

    /**
     * Get levels created by a particular user by title
     *
     * @param username
     * @param title
     * @return
     */
    public List<Level> getMyLevelsByTitle(String username, String title) {
        List<DatastoreLevel> datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("creator =", username).filter("title =", title).list();
        return convertToLevelList(datastoreLevel);
    }

    /**
     * Get sorted levels created by a particular user by title
     *
     * @param username
     * @param sort
     * @return
     */
    public List<Level> getSortedMyLevels(String username, String sort) {
        //List<DatastoreLevel> datastoreLevelList =  ObjectifyService.ofy().load().type(DatastoreLevel.class).order("-timeCreated").list();
        List<DatastoreLevel> datastoreLevelList = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("creator =", username).order(sort).list();
        return convertToLevelList(datastoreLevelList);
    }


    /**
     * Get favorited levels by id
     *
     * @param ids
     * @return
     */
    public List<Level> getFavorites(ArrayList<String> ids) {
        List<Level> levels = new ArrayList<Level>();
        Collection<DatastoreLevel> datastoreLevelsCollection = ObjectifyService.ofy().load().type(DatastoreLevel.class).ids(ids).values();
        for (DatastoreLevel datastoreLevel : datastoreLevelsCollection) {
            levels.add(convertToLevel(datastoreLevel));
        }
        return levels;
    }

    /**
     * Get favorite levels by title
     *
     * @param ids
     * @param title
     * @return
     */
    public List<Level> getFavoritesByTitle(ArrayList<String> ids, String title) {
        List<Level> levels = new ArrayList<>();
        List<DatastoreLevel> datastoreLevels = ObjectifyService.ofy().load().type(DatastoreLevel.class).filter("title =", title).list();
        for (DatastoreLevel datastoreLevel : datastoreLevels) {
            if (ids.contains(datastoreLevel.getLevelId())) {
                levels.add(convertToLevel(datastoreLevel));
            }
        }
        return levels;
    }

    /**
     * Get sorted favorite levels by id
     *
     * @param ids
     * @param sort
     * @return
     */
    public List<Level> getSortedFavorites(ArrayList<String> ids, String sort) {
        List<Level> levels = new ArrayList<>();
        List<DatastoreLevel> datastoreLevels = ObjectifyService.ofy().load().type(DatastoreLevel.class).order(sort).list();
        for (DatastoreLevel datastoreLevel : datastoreLevels) {
            if (ids.contains(datastoreLevel.getLevelId())) {
                levels.add(convertToLevel(datastoreLevel));
            }
        }
        return levels;
    }

    /**
     * Save a level
     *
     * @param level
     * @return
     */
    public DatastoreLevel save(Level level) {
        DatastoreLevel datastoreLevel = convertToDatastoreLevel(level);
        ObjectifyService.ofy().save().entities(datastoreLevel).now();
        return datastoreLevel;
    }

    /**
     * Update a level by id
     *
     * @param id
     * @param updatedLevel
     * @return
     */
    public DatastoreLevel update(String id, Level updatedLevel) {
        DatastoreLevel updateDatastoreLevel = convertToDatastoreLevel(updatedLevel);
        DatastoreLevel datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).id(id).now();
        datastoreLevel.setCellLength(updateDatastoreLevel.getCellLength());
        datastoreLevel.setCells(updateDatastoreLevel.getCells());
        datastoreLevel.setCreator(updateDatastoreLevel.getCreator());
        datastoreLevel.setDescription(updateDatastoreLevel.getDescription());
        datastoreLevel.setDifficulty(updateDatastoreLevel.getDifficulty());
        datastoreLevel.setFps(updateDatastoreLevel.getFps());
        datastoreLevel.setFuel(updateDatastoreLevel.getFuel());
        datastoreLevel.setHealth(updateDatastoreLevel.getHealth());
        datastoreLevel.setLevelType(updateDatastoreLevel.getLevelType());
        datastoreLevel.setTitle(updateDatastoreLevel.getTitle());
        datastoreLevel.setRating(updateDatastoreLevel.getRating());
        datastoreLevel.setPrivateLevel(updateDatastoreLevel.isPrivateLevel());
        datastoreLevel.setNextLevel(updateDatastoreLevel.getNextLevel());
        datastoreLevel.setImage(updateDatastoreLevel.getImage());
        datastoreLevel.setBulletLimit(updateDatastoreLevel.getBulletLimit());
        datastoreLevel.setSpaceship(updateDatastoreLevel.getSpaceship());
        ObjectifyService.ofy().save().entities(datastoreLevel).now();
        return datastoreLevel;
    }

    /**
     * Delete a level by id
     *
     * @param id
     * @return
     */
    public DatastoreLevel deleteById(String id) {
        DatastoreLevel datastoreLevel = ObjectifyService.ofy().load().type(DatastoreLevel.class).id(id).now();
        ObjectifyService.ofy().delete().entity(datastoreLevel);
        return datastoreLevel;
    }

    /**
     * Delete all levels
     */
    public void deleteAllLevels() {
        List<Key<DatastoreLevel>> keys = ObjectifyService.ofy().load().type(DatastoreLevel.class).keys().list();
        ObjectifyService.ofy().delete().entities(keys).now();
    }


    /**
     * Convert level object to datastore level object
     *
     * @param level
     * @return
     */
    public DatastoreLevel convertToDatastoreLevel(Level level) {
        //convert cells array to string
        String cells = Arrays.toString(level.getCells());
        //remove spaces and commas
        cells = cells.replaceAll(", ", "");
        //trim '[' and ']'
        cells = cells.substring(1, cells.length() - 1);
        DatastoreLevel datastoreLevel = new DatastoreLevel(level.getLevelId(), cells,
                level.getDescription(), level.getTitle(), level.getHealth(), level.getFuel(), level.isPrivateLevel(),
                level.getDifficulty(), level.getRating(), level.getCreator(), level.getNextLevel(), level.getFps(),
                level.getCellLength(), level.getTimeCreated(), level.getLevelType(), level.getImage(), level.getBulletLimit(), level.getSpaceship());
        return datastoreLevel;
    }

    /**
     * Convert datastoreLevel object to level object
     *
     * @param datastoreLevel
     * @return
     */
    public Level convertToLevel(DatastoreLevel datastoreLevel) {
        char[] cells = new char[datastoreLevel.getCells().length()];
        //converts string to int[]
        for (int i = 0; i < datastoreLevel.getCells().length(); i++) {
            cells[i] = datastoreLevel.getCells().charAt(i);
        }

        Level level = new Level(datastoreLevel.getLevelId(), cells,
                datastoreLevel.getDescription(), datastoreLevel.getTitle(), datastoreLevel.getHealth(), datastoreLevel.getFuel(), datastoreLevel.isPrivateLevel(),
                datastoreLevel.getDifficulty(), datastoreLevel.getRating(), datastoreLevel.getCreator(), datastoreLevel.getNextLevel(), datastoreLevel.getFps(),
                datastoreLevel.getCellLength(), datastoreLevel.getTimeCreated(), datastoreLevel.getLevelType(), datastoreLevel.getImage(), datastoreLevel.getBulletLimit(), datastoreLevel.getSpaceship());

        return level;
    }

    /**
     * Convert list of datastorelevels to list of level objects
     *
     * @param datastoreLevelList
     * @return
     */
    public List<Level> convertToLevelList(List<DatastoreLevel> datastoreLevelList) {
        List<Level> levelList = new ArrayList<Level>();
        for (DatastoreLevel datastoreLevel : datastoreLevelList) {
            char[] cells = new char[datastoreLevel.getCells().length()];
            //converts string to int[]
            for (int i = 0; i < datastoreLevel.getCells().length(); i++) {
                cells[i] = datastoreLevel.getCells().charAt(i);
            }

            Level level = new Level(datastoreLevel.getLevelId(), cells,
                    datastoreLevel.getDescription(), datastoreLevel.getTitle(), datastoreLevel.getHealth(), datastoreLevel.getFuel(), datastoreLevel.isPrivateLevel(),
                    datastoreLevel.getDifficulty(), datastoreLevel.getRating(), datastoreLevel.getCreator(), datastoreLevel.getNextLevel(), datastoreLevel.getFps(),
                    datastoreLevel.getCellLength(), datastoreLevel.getTimeCreated(), datastoreLevel.getLevelType(), datastoreLevel.getImage(), datastoreLevel.getBulletLimit(), datastoreLevel.getSpaceship());

            levelList.add(level);
        }
        return levelList;
    }

}
