
//package start;
import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
import java.util.*;
import java.nio.file.*;
import java.io.IOException;



public class GuiTrial {

    public static void main(String[] args) {
        JFrame frame = new JFrame("Translator Window");
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Use simple flowlayout so things appear left to right
        frame.setLayout(new FlowLayout());

        JLabel label = new JLabel("Enter English word:");
        JTextField textField = new JTextField(20);  // 20 columns wide
        JButton button = new JButton("Translate");

        JLabel translationLabel = new JLabel("Translation");
        

        frame.add(label);
        frame.add(textField);
        frame.add(button);
        frame.add(translationLabel);

        frame.setVisible(true);

        Map<String, String> dictionary = new HashMap<>();
        



       button.addActionListener(e -> {
              String input = textField.getText().toLowerCase().trim();
             
                if (input.equals("hello")) {
                    translationLabel.setText("Greek: yah-soo");
                    } else {
                        translationLabel.setText("Translation not found.");
                    }
                
                });
        
        
        }
        }
 


    


