package com.scarletlife.model;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

import java.util.Date;
import java.util.UUID;

@Entity
public class DatastoreLevel {
    @Id
    String levelId;
    String cells;
    String description;
    @Index
    String title;
    int health;
    int fuel;
    @Index
    boolean privateLevel;
    @Index
    int difficulty;
    @Index
    int rating;
    @Index
    String creator;
    String nextLevel;
    int fps;
    int cellLength;
    @Index
    Date timeCreated;
    @Index
    String levelType;
    String image;
    int bulletLimit;
    Spaceship spaceship;

    public DatastoreLevel() {

    }

    public DatastoreLevel(String levelId, String cells, String description, String title,
                          int health, int fuel, boolean privateLevel, int difficulty,
                          int rating, String creator, String nextLevel, int fps,
                          int cellLength, Date timeCreated, String levelType, String image, int bulletLimit, Spaceship spaceship) {
        this.levelId = levelId;
        this.cells = cells;
        this.description = description;
        this.title = title;
        this.health = health;
        this.fuel = fuel;
        this.privateLevel = privateLevel;
        this.difficulty = difficulty;
        this.rating = rating;
        this.creator = creator;
        this.nextLevel = nextLevel;
        this.fps = fps;
        this.cellLength = cellLength;
        this.timeCreated = timeCreated;
        this.levelType = levelType;
        this.image = image;
        this.bulletLimit = bulletLimit;
        this.spaceship = spaceship;
    }

    public String getLevelId() {
        return levelId;
    }

    public void setLevelId(String levelId) {
        this.levelId = levelId;
    }

    public String getCells() {
        return cells;
    }

    public void setCells(String cells) {
        this.cells = cells;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public boolean isPrivateLevel() {
        return privateLevel;
    }

    public void setPrivateLevel(boolean privateLevel) {
        this.privateLevel = privateLevel;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getNextLevel() {
        return nextLevel;
    }

    public void setNextLevel(String nextLevel) {
        this.nextLevel = nextLevel;
    }

    public int getFps() {
        return fps;
    }

    public void setFps(int fps) {
        this.fps = fps;
    }

    public int getCellLength() {
        return cellLength;
    }

    public void setCellLength(int cellLength) {
        this.cellLength = cellLength;
    }

    public Date getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(Date timeCreated) {
        this.timeCreated = timeCreated;
    }

    public String getLevelType() {
        return levelType;
    }

    public void setLevelType(String levelType) {
        this.levelType = levelType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getBulletLimit() {
        return bulletLimit;
    }

    public void setBulletLimit(int bulletLimit) {
        this.bulletLimit = bulletLimit;
    }

    public Spaceship getSpaceship() {
        return spaceship;
    }

    public void setSpaceship(Spaceship spaceship) {
        this.spaceship = spaceship;
    }
}
