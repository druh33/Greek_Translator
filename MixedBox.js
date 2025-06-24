// JavaScript source code

import javax.swing.*;
import java.awt.*;

public class MixedBox {
    public static void main(String[] args) {
        // Creates translator from dictionary file
        Translator translator = new Translator("dictionary.csv");


        JFrame frame = new JFrame("Translator - Mixed Layout");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);

        //  Main panel with vertical layout
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        //  Row 1: horizontal panel (label + textfield)
        JPanel inputRow = new JPanel();
        inputRow.setLayout(new BoxLayout(inputRow, BoxLayout.X_AXIS));
        inputRow.add(new JLabel("Enter word: "));
        JTextField inputField = new JTextField(15);
        inputField.setPreferredSize(new Dimension(20, 40));
        inputRow.add(inputField);

        // Row 2: button panel (could center it later)
        JButton translateButton = new JButton("Translate");

        //  Row 3: result label
        JLabel resultLabel = new JLabel("Translation appears here");

        //  Add everything to vertical main panel
        mainPanel.add(inputRow);
        mainPanel.add(Box.createVerticalStrut(10));
        mainPanel.add(translateButton);
        mainPanel.add(Box.createVerticalStrut(10));
        mainPanel.add(resultLabel);

        // button calls Translator object
        translateButton.addActionListener(e -> {
            String input = inputField.getText();
            String translation = translator.translate(input);
            resultLabel.setText(translation);
        });

        frame.add(mainPanel);
        frame.setVisible(true);
    }
}

