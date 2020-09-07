![Volog logo](https://github.com/NullDefault/Volog/blob/master/static/assets/volog_logo_alpha.png)
</br>
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/><img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></br>

**Volog (n.) : Volunteer Log, software for recording and and querying volunteer hours.**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development environment running.</br>

```
 - First, ensure you have python installed as well as your preferred IDE.
 - Clone the repository onto your local machine.
 - Navigate to the docs folder inside of the project.
 - In order to install all the project dependencies, you need to set up a pipenv environment and use it as the interpreter for the project.
 - Finally, run the server using the "manage.py runserver" command and explore the website on localhost.
```

## Running the tests


## Coding style

### Python

PEP 8 applies to all python code. Read more about it [here](https://www.python.org/dev/peps/pep-0008/).</br>
Below are some essential python style tips:</br>

- CamelCase for class names, snake_case for basically everything else </br>
- Keep things as obvious as possible - don't make acronyms unless you absolutely have to, write explicit variable names e.t.c.</br>
- DRY (don't repeat yourself) is essential. If you need to write the same code twice, you can probably just refactor and avoid doing so.</br>
- Speaking of refactoring - do it often, and carefully. Since this is a volunteer sustained project, there will always be engineers cycling through so keeping the code base accessible and clear is one of, if not the, most important parts of the development process.</br>
- In relation to above, try and document any major decisions you make in the meta data files (i.e devblog.txt). The more of the development history is documented, the easier it will be for those who work on your code next.

When in doubt, refer to *The Zen of Python*, by Tim Peters:
```
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

### HTML & CSS

Refer to the [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html).

### JavaScript

Check out the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).

## Deployment

Demonstrate how to deploy the website to production.</br>

```
# TODO
```

## Contributing

The base workflow is as follows:
Create New Branch -> Make Changes -> Commit/Push Changes to Your Local Branch -> When Done With Yor Work, Submit Pull Request and Request Review From Relevant Teammate -> Get Feedback -> Make Changes To The Branch If Necessary (Do NOT Open a New Pull Request) -> Get Merge Approval -> Merge Your Branch with Master -> Rinse and Repeat

Additionally, here are some essential tips for making your contributions professional and clear:

- When making a new branch, title it after the feature/task you are working on. Do not title branches after your name or other non-descriptive things. The goal of the title should be to communicate to your teammates what the branch is for and, hopefully, hint at the files that were changed.
- Ideally, each commit should be entirely self contained and only affect one part of the codebase. It's not the end of the world if multiple changes are a part of the same commit, but generally speaking the more the commit changes the functionality of the website, the more important it is to have it be it's own thing.
- When you are done working on your branch, open a pull request and (unless it's something tiny like a readme edit) request a teammate to review your changes and merge the branch into master.
- **Do not** push to master directly. The only exceptions to this are (1) README edits, (2) documentation updates and (3) typo fixes.
- As the saying goes, _"measure twice, cut once"_. Before finalizing any contribution, always double check your work and make sure you did not break anything in the process. Some of the things you should verify are (1) does the server run, (2) do all the pages load properly and (3) does the feature you were working on function as expected. If they are available, run all the tests before submiting a pull request.

All version control is done with Git. If you are new, we recommend watching [this](https://www.youtube.com/watch?v=DVRQoVRzMIY) video for a basic introduction. Additionally, [this](https://guides.github.com/introduction/flow/) official github guide serves as a good introduction to the basics of the git workflow.

## Contributors
David Nesterov-Rappoport : NullDefault</br>

Mahmoud Alminawi: Momo </br> 

Deja Santana : d-daring</br>

Perrfection Peterkin : Perrfection</br>

## Acknowledgments

- Hat tip to anyone whose code was used
