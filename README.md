# Text to JSON Converter

This script converts a text file into a JSON file where each line of the text file is a key-value pair in the JSON object.

## Prerequisites

- Node.js installed on your machine.

## Usage

1. Place your text files in the same directory as the script.
2. Run the script using Node.js with the input and output file names as arguments.

```
node textToJsonScript.js [input_file] [output_file]
```

# Example Input and Output

Input (text.txt)

```
line1
line2
line3
```

Output (text.json)

```
{
 "0": "line1",
 "1": "line2",
 "2": "line3"
}
```

# Script Explanation

The script reads the input text file, splits its content by lines, and converts each line into a JSON key-value pair. The resulting JSON object is then written to the specified output file.

# Code Overview

The script uses the fs module to read and write files. It takes two command-line arguments: the input file name and the output file name. It reads the input file, splits the content by newlines, and constructs a JSON object where each line is a value with its line number as the key. The JSON object is then written to the output file.
