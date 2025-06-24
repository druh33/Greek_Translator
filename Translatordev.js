
import java.nio.file.*;
import java.util.*;
import java.io.*;
import java.nio.file.Files;
import java.io.IOException;


public class Translatordev {
    public static void main(String[] args) {
        // dictionary file is a csv that's a hashmap. Opening it first before program asks for translation
        HashMap < String, String > dictionary =  loadDictionary("dictionary.csv");
        // if no words in dictionary, the below statement is returned
        if (dictionary.isEmpty()) {
            System.out.println("Dictionary is empty or file not found.");
            return;
        }

        // User input below
        System.out.println("Hi, welcome to the English to Greek translator!");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the word or phrase you want translated: ");
        String inputWord = input.next();

        // word retrieval
        String translation = dictionary.get(inputWord);
        if (dictionary.get(inputWord)) {
         
            System.out.println(inputWord + " is pronounced " + translation);
        }
        else {
            System.out.println("Translation not found, sorry!");
        }
    }


 private static HashMap<String, String> loadDictionary(String filename) {
        HashMap < String, String > map = new HashMap <> ();
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
    
