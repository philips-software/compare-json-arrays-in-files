# Compare-Json-Arrays-In-Files

> Note: :warning: If you're interested in Software Bill of Materials, you might also look into [Bompare](https://github.com/philips-labs/bompare)

### Description
Compares the contents of two JSON files as provided in the command line.

Output is three json files, containing common elements and deltas:
  - _commonElements.json_, contains the elements common to both file in the left as well as the one in the right
  - _elementsInLeftOnly.json_: contains the elements which are only found in the left file 
  - _elementsInRightOnly.json_: contains the elements which are only found in the right file 

__Note__: contents of these output files is sorted as follows:
  - keys in each element of the array are sorted alphabetically
  - elements in the array are sorted by their string representation.

### Why was this needed?
Unlike other tools that provide a diff-like view in one file, and instead of comparing the contents of files side-by-side using a diff text tool, Compare-Json-Arrays-In-Files provides a clear overview of the common parts and deltas (to three output files), taking into consideration that the order of elements to be compared may be different between files.

Thus, if the left file would contain:
```
[
  {"letter": "A", "digit": "1"},
  {"letter": "B", "digit": "2"},
  {"letter": "C", "digit": "3"}
]
```

and the right one would contain:
```
[
  {"digit": "1", "letter": "A"},
  {"digit": "3", "letter": "C"},
  {"letter": "B", "digit": "2"}
]
```

then Compare-Json-Arrays-In-Files would conclude that the files have the same JSON contents.

It outputs at one glance, in the console output:
  - a comparison of the number of elements read from each of the input files
  - a high-level comparison based on the contents, i.e. #elements that are common, #elements that are found only in the left file, #elements were only found in the right file.
  - names of the output files
This overview is very useful especially when the two files contain hundreds or more elements.

### Status
v1.0.0, see [CHANGELOG.md](./CHANGELOG.md)

### Limitations
- currently only supporting flat JSON objects (no nested structures)

### Prerequisites
- you should have Node installed (this script was tested with node v12.2.0)
- you should have yarn installed (we used version v1.19.0)

### How to run
```
yarn compareJsonFiles [options] <leftFile> <rightFile>
```
#### Mandatory arguments:
| Arguments       | Functionality
| --------------- | ---------------------------------------------
| leftFile        | Left input .json filename used in comparison
| rightFile       | Right input .json filename used in comparison

#### Supported options:
| Flag              | Alias | Functionality
| ----------------- |:-----:| -------------------------------------
| --verbose         |       | Verbose output of commands and errors
| --help            | -h    | Help      
| --version         | -v    | Version

#### Sample usage
```
yarn compareJsonFiles ./testData/fileWithABC.json ./testData/fileWithBCD.json --verbose
```

## Technology stack
- Javascript
- This software is intended to be used standalone, as a command-line tool

## How to build
Get the sources locally; in a command line, go to the root folder of this project and execute:
```
yarn install
```

## How to test
```
yarn test
```
or, to get the coverage:
```
yarn coverage
```
## How to do static analysis of code
__Automatically enabled: standard__
```
yarn lint
```

## Owners
See [CODEOWNERS](./CODEOWNERS)

## Maintainers
See [MAINTAINERS.md](./MAINTAINERS.md)

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License
See [LICENSE.md](./LICENSE.md)

## Keywords
  - json arrays comparer
  - json arrays delta 
