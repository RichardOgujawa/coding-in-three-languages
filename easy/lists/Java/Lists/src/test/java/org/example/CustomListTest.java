package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CustomListTest {
    CustomList newUserList = new CustomList(new ArrayList<>());
    @Test
    void insertMethodWorks(){
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("insert", "0", "5")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(List.of(5)));
    }
    @Test
    void appendMethodWorks(){
        newUserList.setUserList(new ArrayList<>(List.of(5)));
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("append", "78")));
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("append", "100")));
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("append", "2")));
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("append", "5")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(Arrays.asList(5, 78, 100, 2, 5)));
    }
    @Test
    void removeMethodWorks(){
        newUserList.setUserList(new ArrayList<>(Arrays.asList(5, 78, 100, 2, 5)));
        newUserList.matchCommand(new ArrayList<>(Arrays.asList("remove", "5")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(Arrays.asList(78, 100, 2, 5)));
    }
    @Test
    void popMethodWorks(){
        newUserList.setUserList(new ArrayList<>(Arrays.asList(78, 100, 2, 5)));
        newUserList.matchCommand(new ArrayList<>(List.of("pop")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(Arrays.asList(78, 100, 2)));
    }
    @Test
    void sortMethodWorks(){
        newUserList.setUserList(new ArrayList<>(Arrays.asList(78, 100, 2)));
        newUserList.matchCommand(new ArrayList<>(List.of("sort")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(Arrays.asList(2, 78, 100)));
    }
    @Test
    void reverseMethodWorks(){
        newUserList.setUserList(new ArrayList<>(Arrays.asList(2, 78, 100)));
        newUserList.matchCommand(new ArrayList<>(List.of("reverse")));
        assertEquals(newUserList.getUserList(), new ArrayList<>(Arrays.asList(100, 78, 2)));
    }



}