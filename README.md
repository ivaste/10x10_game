# 10x10_game

Given a NxN table, write the numbers from 1 to NxN respecting the following rules:
 - a number can be positioned just in an empty cell inside the table
 - the number "1" can be positioned everywhere
 - the next number can be placed in a vertically or hirizzontaly position with respect to the previous one, if between the two there is a space of 2 squares, or diagonally leaving a space of 1 square

For example if N=10 we have to count from 1 to 100

<p align="center">
<img src="https://github.com/ivaste/10x10_game/blob/main/doc/images/image.png?raw=true" width="300" />
</p>


## Solution

Intuitions:
- The table can be seen as a graph where each cell is a node
- each cell is connected with only 8 specific cells in it's sorroundings (except those one in the borders that have less connections), the edge cost is 1.
- Solve as the TSP
- to avoid the coming back edge of the TSP: create a dummy point whose distances to every other points is 0. Therefore, the problem becomes an (n+1)-city symmetric TSP. After solving, just delete dummy point and then the minimum length Hamiltonian path is solved and we can get the TSP path without returning back the start point.

## Usage
- Install [OR-Tools](https://developers.google.com/optimization): python -m pip install --upgrade --user ortools
- Import the required libraries: from ortools.linear_solver import pywraplp

## Todo
- [ ] Readme
- [ ] fancier solution matrix visualization
- [ ] deploy on netlify
- [ ] better algorithm (TSP?)
- [ ] modifyable rules: make the user choose the horizontal/vertical and diagonal distance
- [ ] Colored animation for the solution 1->N
- [ ] python mip solver: https://developers.google.com/optimization/routing/tsp
