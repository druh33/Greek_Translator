// JavaScript source code

import java.nio.file.*;
import java.util.*;
import java.io.IOException;
import java.io.*;


public class Translator {
    private HashMap<String, String> dictionary;

    public Translator(String filename) {
        dictionary = loadDictionary(filename);
    }

    // word retrieval
    public String translate(String inputWord) {
        String cleanedInput = inputWord.toLowerCase().trim();
        String translation = dictionary.get(cleanedInput);

    // Uses not equal boolean logic to scan dictionary, if word or phrase is not empty, it matches using HashMap
        if (translation != null) {
            return "'" + inputWord + "'" + " is " + translation;
        } else {
            return "Translation not found, sorry!";
    } 
}

    // HashMap array try and catch; defines english and greek words are split by a comma
    // into 2 parts. If more than 2 parts, an error is shown
    private HashMap<String, String> loadDictionary(String filename) {
        HashMap<String, String> map = new HashMap<>();
        try {
            List < String > lines = Files.readAllLines(Paths.get(filename));
            for (String line : lines) {
                String[] parts = line.split(",", 2); // limit = 2 to avoid splitting inside Greek
                if (parts.length == 2) {
                    map.put(parts[0].toLowerCase().trim(), parts[1].trim());
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading dictionary file: " + e.getMessage());
        }
        return map;
    }
}
