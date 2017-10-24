package com.scarletlife.persistance;

import com.googlecode.objectify.ObjectifyService;
import com.scarletlife.model.DatastoreLevel;
import com.scarletlife.model.Level;
import com.scarletlife.model.User;

import javax.servlet.ServletContextListener;
import javax.servlet.ServletContextEvent;

/**
 * OfyHelper, a ServletContextListener, is setup in web.xml to run before everything
 **/
public class OfyHelper implements ServletContextListener {
    public void contextInitialized(ServletContextEvent event) {
        ObjectifyService.register(DatastoreLevel.class);
        ObjectifyService.register(User.class);
    }

    public void contextDestroyed(ServletContextEvent event) {
    }
}