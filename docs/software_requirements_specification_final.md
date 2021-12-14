# Software Requirements Specification

This document outlines the software requirements for the app's features and the traceability between them and the various artifacts created to direct development.

# Software Requirements

Below is a list of functional and non-functional requirements for the application, which detail its intended features and specifications.

## Functional Requirements

### The User Interface

| ID  | Requirement |
| :-------------: | :----------: |
| FR1 | The application shall display the pixel grid described in FR11 on the drawing screen. |
| FR2 | The application shall display a background image on the drawing screen. |
| FR3 | The application shall change the color of the "Color Picker" button to be the same as the current drawing color. |
| FR4 | The application shall display a color picker object when on the Color Picker screen. |
| FR5 | The application shall display two colored buttons underneath the color picker. |

### App Navigation

| ID  | Requirement |
| :-------------: | :----------: |
| FR6 | The application shall navigate to the Color Picker screen when the "Color Picker" button on the drawing screen is tapped. |
| FR7 | The application shall navigate to the drawing screen when the back arrow on the color picker screen is tapped. |
| FR8 | The application shall navigate to the drawing screen when the left color button on the color picker screen is tapped. |
| FR9 | The application shall navigate to the drawing screen when the right color button on the color picker screen is tapped. |
| FR10 | The application shall generate the same grid with color data when navigating back from the color picker screen.  |

### The Pixel Canvas 

| ID  | Requirement |
| :-------------: | :----------: |
| FR11 | The application shall contain a grid that is 30 cells wide and 30 cells tall. |
| FR12 | The application shall allow the color of the cells to be changed by touching them on the screen. |
| FR13 | The application shall "clear" a cell if it is tapped when the color is set to white (#FFFFFF). |
| FR14 | The application shall display a "Color Picker" button underneath the pixel grid. |
| FR15 | The application shall set the color of each cell to white by default on startup. |

### The Color Picker

| ID  | Requirement |
| :-------------: | :----------: |
| FR16 | The application shall change the hue on the color picker when the user slides their finger towards the desired hue on the color picker's outer circle. |
| FR17 | The application shall change the brightness of the color on the color picker when the user slides their finger towards or away from the black corner of the triangle on the color picker. |
| FR18 | The application shall change the saturation of the color on the color picker when the user slides their finger towards or away from the white corner of the triangle on the color picker. |
| FR19 | The application shall set the drawing color to the last-used color (that the user entered the color picker screen using) when the left colored button is pressed. |
| FR20 | The application shall set the drawing color to the color currently selected on the color picker when the right colored button is pressed. |


### Passing Color Information

| ID  | Requirement |
| :-------------: | :----------: |
| FR21 | The application shall change the color of the right color button to match the color currently selected by the color picker. |
| FR22 | The application shall pass the most recently used color value to the drawing screen when the left color button under the color picker is tapped (providing context for FR8 and FR19 to both be fulfilled). |
| FR23 | The application shall pass the color value selected on the color picker to the drawing screen when the right color button under the color picker is tapped (providing context for FR9 and FR20 to both be fulfilled). |
| FR24 | The application shall maintain the most recently used drawing color if the user exits the drawing screen using the back arrow on the color picker screen. |
| FR25 | The application shall receive the color value currently in use from the drawing screen and change the color of the left color button to match it. |

## Non-Functional Requirements

### The User Interface (Performance)

| ID  | Requirement |
| :-------------: | :----------: |
| NFR1 | The application shall load the pixel grid display within 2 seconds of navigating to the drawing screen. |
| NFR2 | The application shall display the background image within 2 seconds of navigating to the drawing screen. |
| NFR3 | The application shall update the "Color Picker" button's color within 2 seconds of navigating to the drawing screen. |
| NFR4 | The application shall display the color picker within 2 seconds of navigating to the color picker screen. |
| NFR5 | The application shall display the color buttons within 2 seconds of navigating to the color picker screen. |

### App Navigation (Performance) 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR6 | The application shall begin navigation to the color picker screen within 2 seconds of tapping the "Color Picker" button. |
| NFR7 | The application shall begin navigation to the drawing screen within 2 seconds of tapping the back arrow. |
| NFR8 | The application shall begin navigation to the drawing screen within 2 seconds of tapping the left color button. |
| NFR9 | The application shall begin navigation to the drawing screen within 2 seconds of tapping the right color button. |
| NFR10 |  The application shall load the existing grid when navigating back to the drawing screen within 2 seconds of entering the screen. |

### The Pixel Canvas (Performance) 

| ID  | Requirement |
| :-------------: | :----------: |
| NFR11 | The application shall render a new pixel grid within 2 seconds of initially opening the application. |
| NFR12 | The application shall change a cell's color within 2 seconds of that cell being tapped. |
| NFR13 | The application shall display each cell's current color within 2 seconds of opening the drawing screen. |
| NFR14 | The application shall render the "Color Picker" button within 2 seconds of opening the drawing screen. |
| NFR15 | The “Color Picker” button shall simulate a button press indent within 1 second of pressing the button. |

### The Color Picker (Performance)

| ID  | Requirement |
| :-------------: | :----------: |
| NFR16 | The application shall visibly update the hue on the color picker within 2 seconds of the user's selection. |
| NFR17 | The application shall visibly update the brightness on the color picker within 2 seconds of the user's selection. |
| NFR18 | The application shall visibly update the saturation on the color picker within 2 seconds of the user's selection. |
| NFR19 | The application shall set the drawing color to the most recently used color within 2 seconds of the user pressing the left color button. |
| NFR20 | The application shall set the drawing color to the color selected on the color picker within 2 seconds of the user pressing the right color button. |

### Passing Color Information (Performance)

| ID  | Requirement |
| :-------------: | :----------: |
| NFR21 | The application shall change the color of the right color button within 1 second of the user selecting a new color on the color picker. |
| NFR22 | The application shall pass the most recently used color value to the drawing screen within 2 seconds of the user tapping the left color button. |
| NFR23 | The application shall pass the color value selected on the color picker to the drawing screen within 2 seconds of the user tapping the right color button. |
| NFR24 | The application shall pass the most recently used color value to the drawing screen within 2 seconds of the user tapping the back button. |
| NFR25 | The application shall change the color of the left color button within 1 additional visit to the color picker screen. |

# Change management plan

## The Application
Team CIS657 has been offered a contract through a big Crayon company to create and market an application that is created and marketed to K-12 students. The application that we created is PixelArt, an application that allows users to create pixelated images. 

This crayon company is offering a scholarship to school aged children for the completion of a pixel art image on the application. In return, this crayon company would like us to provide the color data back to them so that they can create their next color pack based on the most used colors. In this plan we will discuss how your school can benefit from integrating this application into your classrooms. 

## Why do we want to utilize this?
This application allows even the youngest students to create digital art and gives teachers a free application to help include STEAM activities in their classrooms. Additionally, when applicatcants complete an image and submit to our website they are automatically entered into a scholarship opportunity they will be able to win up to a $5000 scholarship and countless prizes. 

For schools that register with us, the first  500 schools will receive a class pack of the developed crayon package for each art teacher in their district. 

## How will my students know how to use it?
The big crayon company has a promotional video currently in production. This video will be under 3 minutes and will show users how to create the artwork, submit their applications, and contact us with concerns. The application is designed to be game/like and is intuitive for even the most hesitant users. We are dedicated to accessibility and there are no language/sound requirements. 

## What ethical/security concerns have you addressed?
There were several questions that were brought up after the initial requirements meeting that caused us to redesign aspects of our application. Since this is something that will be targeted to children there were several ethical and usage concerns. Here is a list of the most prevalent concerns and how our team took them into consideration. 
**How can we keep the children safe from social media?**
First we removed all login and export information, removing access for individual login data will allow each user anonymity. 
**How can we ensure that the only data collected is the color data?**
Since we removed all identifying login information the only data that is collected, until the applicants submit their artwork, are the colors selected.  We took it a step further and made this a web application. This will not require the need to download an application on a device and allows for schools and parents to utilize it on a larger scale. 
**Ease of usage for children**
This is a web based application that is created for a big crayon company. This company has agreed to create a promo video that will show step by step how to access and create the picture. This application will work on all devices, during development the team often tested for phone, tablet and pc view of the webpage. For our users that have trouble with fine motor skills, it responds to touch. 
**How will they access the application?**
As discussed above, the application can be accessed on any machine that can open a web browser. 
**If you are not collecting data how will they submit their artwork?**
Once the crayon company has completed the promotion video there will be a link to the video at the bottom of the web application to view the complete instructions for submitting the artwork. That link will take them to the company’s webpage that will handle the submission and login information. Privacy was our number one concern with our application and since it is marketed to children we wanted to keep the submission process and the creation process separate to keep 100% anonymity when playing with the pixel art creation. Any app concerns or help issues can be reported in the feedback section on that website.


# Traceability links

This section describes how the project requirements are fulfilled by linking them with the items on the artifact diagrams.

## Use Case Diagram Traceability

| Artifact ID  | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Select Cell | FR1, FR10-11, NFR1, NFR11 |
| UseCase2 | Color Cell | FR12-13, FR15, NFR12-13 |
| UseCase3 | Select Standard Color | FR5, FR19, FR25, NFR4-6 |
| UseCase4 | Select Custom Color | FR3-5, FR14, FR16-18, FR21, NFR16-21, NFR25 |
| UseCase5 | Activate Color Selection | FR3-5, FR7-9, FR19-20, FR22-24, NFR7-10, NFR22-24 |
| UseCase6 | Change Background Color | FR2, NFR2-3, NFR14-15 |

## Class Diagram Traceability

| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classGrid | FR1-1, FR7-10, FR12-15, NFR1-2, NFR7-15 |
| rows | FR11 |
| columns | FR11 |
| color | FR3, FR12-13, FR20-25, NFR3, NFR12-13 |
| classColorPicker | FR4, FR6, FR16-20, FR23, NFR4-6, NFR16-21 |
| initializePicker | FR5, NFR4-6 |
| selectColor | FR16-21, FR23-25, NFR16-25 |

## Activity Diagram Traceability

| Artifact ID  | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| activity1.1 | Load Design | FR1-2, FR10-11, FR15, NFR1-2, NFR10-11, NFR13 |
| activity1.2 | Select Cell | FR12-13, NFR12 |
| activity1.3 | Cell Changes Color | FR12-13, NFR12 |
| activity2.1 | Enter Color Picker | FR4-6, FR14, NFR4-6, NFR14-15 |
| activity2.2 | Select Color | FR16-20, NFR16-20 |
| activity2.3 | Color Changes | FR3, FR16-25, NFR3, NFR16-21 |
| activity 2.4 | Return to Grid | FR7-10, FR22-25, NFR1-2, NFR7-9, NFR22-25 |

# Software Artifacts

Below are links to the original artifact diagrams referenced in the traceability tables:

* [Midterm SRS](https://github.com/NessXToJason/GVSU-CIS641-TEAM657/blob/master/docs/software_requirements_specification.md)
* [Use Case Diagram](https://github.com/NessXToJason/GVSU-CIS641-TEAM657/blob/master/artifacts/functional-models/Use%20Case%20%20%20Activity%20Diagrams.jpg)
* [Activity and Class Diagrams](https://github.com/NessXToJason/GVSU-CIS641-TEAM657/blob/master/artifacts/functional-models/Activity%20Diagrams.pdf) (underneath the use case diagram)
