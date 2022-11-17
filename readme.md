# Módulo 2 Challenge 3. Conway's Game of Life

## Conway Game of Life

You will have to program the [Conway Game of life](https://es.wikipedia.org/wiki/Juego_de_la_vida).

![Game of life demo](https://www.jakubkonka.com/images/gof.gif)

A summary of the rules:

A living cell follows the following rules:
-If it has less than 2 contiguous living cells, it dies by "loneliness".
-If it has more than 3 living contiguous cells, it dies of "overpopulation".
-If it has 2 or 3 contiguous living cells, it survives.

A dead cell follows the following rule: It remains dead until it has exactly 3 living contiguous cells, at which point it is "born".

## Requirements

1. Must be tested with Jest.
2. SonarCloud must be used to check the quality of the code.
3. Husky will be used to handle the git-hooks, using the attached files.
4. GitActions should be used for the attached workflow.
5. Main should be protected on GitHub so that everything that is merged goes through pull-request and that the workflow is fulfilled.
6. In the case of HTML/CSS.
    - BEM/SASS will be used.
    - Deploy to Netlify.

## Milestones

1. Add HTML/SASS.
2. Modify JS so that:
    - Cells exit one side of the grid and appear on the other.

My version: https://jmonmany-w6challenge.netlify.app
