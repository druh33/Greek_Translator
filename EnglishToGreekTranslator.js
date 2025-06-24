// JavaScript source code

import java.io.*;
import java.nio.file.*;
import java.util.*;

public class EnglishToGreekTranslator {

    public static void main(String[] args) {
        Map < String, String > dictionary = loadDictionary("dictionary.csv");
        if (dictionary.isEmpty()) {
            System.out.println("Dictionary is empty or file not found.");
            return;
        }

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an English word to translate: ");
        String input = scanner.nextLine().toLowerCase();

        String translation = dictionary.get(input);
        if (translation != null) {
            System.out.println("Greek: " + translation);
        } else {
            System.out.println("Translation not found.");
        }

        scanner.close();
    }

    private static Map<String, String> loadDictionary(String filename) {
        Map < String, String > map = new HashMap <> ();
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

