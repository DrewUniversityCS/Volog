Deja Santana, David Nesterov-Rappoport, Mahmoud Almianwi, Perrfection M. K. Peterkin

Volog, hour logging and tracking software
## What will the project do? What problem is it solving? What is the core  functionality?

This app will allow students to add hours to a database of information and allow admin to verify and visually represent all such information. The goal is to create a visually appealing application that is capable of:

## What capabilities will the system have?
	Hour submission for students
	Tracking and indication of hour types 
	Hour progress of students toward minimum group requirements
	Confirmation of hours at admin level
Tracking of mentor approvals at admin level
Confirmation of hours at mentor level



## User Stories:

As a scholar
I want to submit my volunteers hours 
So that I can keep track of my required volunteer hours process

As an administrator
I want to review hours reported by scholars
So that I am able to confirm scholars’ hours. 

As a mentor
I want to have a view of all scholars' hours including their progress.  
So that I can overview and track the scholars’ volunteer hours


## Use Cases Usage Scenarios should be of the form:
Given... (context)- When... (an action or behavior is carried out)- Then... (some observable outcome)”

Given that admins should have access to the progress of all students
when an admin clicks on view students after they log in, 
then they should be able to view the progression bars of students color coded with the type of hours they complete
Given that admins should be able to approve and verify hours,
when an admin clicks on the hour approval widget, 
then they should be able to see all hour approval requests, view all hour approvals made by mentors, and override the requirement of hour approval for any student 
Given that admins should have access to the hour information of groups and individual students
When an admin clicks on the search widget
Then they should be able to lookup students individually and by a mentor group
Given that mentors should have access to the hours of their students
When a mentor logs in their home screen will summarize the progress of their group 
Then they should be able to click view students to see students individual progression
Given that mentors should be able to approve hours
When a mentor click the hour approval widget on their home page 
Then they should be able to view the approval requests submitted by their student
Given that students should be able to submit hour approval requests
When a student logs into their home page 
Then their dashboard will have an hour submission widget, that prompts them to enter the hour type 
Given that students should be able to see their progression towards the hour requirement minimum as a Civic/action scholar
When a student logs into their account
Then their dashboard will visually show their hour progression





UI Mockups:
https://www.figma.com/proto/ufcBEkejZxrhsAmMqFsUnD/Web-Client?node-id=4%3A0&scaling=scale-down












