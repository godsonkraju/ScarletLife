package com.scarletlife.persistance;


import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.scarletlife.model.Level;
import com.scarletlife.model.User;

import java.util.List;

/**
 * Handles all user related database operations
 */
public class UserDao {

    public List<User> getUsers() {
        return ObjectifyService.ofy().load().type(User.class).list();
    }

    /**
     * Get User by user name
     *
     * @param username
     * @return user
     */
    public User getUserByUsername(String username) {
        return ObjectifyService.ofy().load().key(Key.create(User.class, username)).now();
    }

    /**
     * Save given user
     *
     * @param user
     * @return user
     */
    public User save(User user) {
        ObjectifyService.ofy().save().entities(user).now();
        return user;
    }

    /**
     * Update a user by id
     *
     * @param id
     * @param updatedUser
     * @return
     */
    public User update(String id, User updatedUser) {
        User user = ObjectifyService.ofy().load().type(User.class).id(id).now();
        user.setCampaign(updatedUser.getCampaign());
        user.setFavorites(updatedUser.getFavorites());
        user.setEmail(updatedUser.getEmail());
        user.setLoggedIn(updatedUser.isLoggedIn());
        ObjectifyService.ofy().save().entities(user).now();
        return user;
    }

    /**
     * Deletes user by id
     *
     * @param id
     * @return user
     */
    public User deleteById(String id) {
        User user = ObjectifyService.ofy().load().type(User.class).id(id).now();
        ObjectifyService.ofy().delete().entity(user);
        return user;
    }

    /**
     * Deletes all the users
     */
    public void deleteAllUsers() {
        List<Key<User>> keys = ObjectifyService.ofy().load().type(User.class).keys().list();
        ObjectifyService.ofy().delete().entities(keys).now();
    }

}
