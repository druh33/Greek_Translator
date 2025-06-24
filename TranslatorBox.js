// JavaScript source code

import javax.swing.*;
import java.awt.*;

public class TranslatorBox {
    public static void main(String[] args) {
     // Creates translator from dictionary file
        Translator translator = new Translator("dictionary.csv");


        JFrame frame = new JFrame("Translator - BoxLayout");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);

        //  Create a panel with vertical box layout
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10)); // padding

        //  Create components
        JLabel label = new JLabel("Enter word:");
        JTextField textField = new JTextField(15);
        JButton translateButton = new JButton("Translate");
        JLabel resultLabel = new JLabel("Translation appears here");

        //  Align components to left
        label.setAlignmentX(Component.LEFT_ALIGNMENT);
        textField.setAlignmentX(Component.LEFT_ALIGNMENT);
        translateButton.setAlignmentX(Component.LEFT_ALIGNMENT);
        resultLabel.setAlignmentX(Component.LEFT_ALIGNMENT);

        //  Add with spacing
        panel.add(label);
        panel.add(Box.createVerticalStrut(5));
        panel.add(textField);
        panel.add(Box.createVerticalStrut(10));
        panel.add(translateButton);
        panel.add(Box.createVerticalStrut(10));
        panel.add(resultLabel);


        // button calls Translator object
        translateButton.addActionListener(e -> {
            String input = textField.getText();
            String translation = translator.translate(input);
            resultLabel.setText(translation);
        });
        //  Add to frame
        frame.add(panel);
        frame.setVisible(true);
    }
}

