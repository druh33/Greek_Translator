// JavaScript source code

import javax.swing.*;
import java.awt.*;

public class TranslatorGUI {
    public static void main(String[] args) {
        // Creates translator from dictionary file
        Translator translator = new Translator("dictionary.csv");

        // GUI creation
        JFrame frame = new JFrame("Translator Window");      
        frame.setSize(650, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Use simple flowlayout so things appear left to right
        frame.setLayout(new FlowLayout(FlowLayout.CENTER));

        // adds Greek flag on left of frame
        ImageIcon flagIcon2 = new ImageIcon("flag2.png");
        JLabel flagLabel2 = new JLabel(flagIcon2);
        frame.add(flagLabel2);

        // constructors for GUI
        JLabel label = new JLabel("Enter English word:");
        JButton button = new JButton("Translate");
        JTextField textField = new JTextField(15);  // 15 columns wide
        JLabel translationLabel = new JLabel("Translation");

        // line below lets Greek letters display in GUI
        translationLabel.setFont(new Font("Serif", Font.PLAIN, 16)); 

        // adds Greek flag on right of frame
        ImageIcon flagIcon = new ImageIcon("flag.png");
        JLabel flagLabel = new JLabel(flagIcon);
  
        // adding constructors to GUI
        frame.add(label);
        frame.add(textField);
        frame.add(button);
        frame.add(flagLabel);
        frame.add(translationLabel);
        

        // button calls Translator object
        button.addActionListener(e -> {
            String input = textField.getText();
            String translation = translator.translate(input);
            translationLabel.setText(translation);
        });
        // lets you hit enter in text field
        textField.addActionListener(e -> {
            String input = textField.getText();
            String translation = translator.translate(input);
            translationLabel.setText(translation);
        });

        frame.setVisible(true);
    }
}
