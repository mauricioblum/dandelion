# Requirements Document


### 1. User Requirements


##### 1.1 User Characteristics  
The user is an attendee of some party that wants to request a specific song to the DJ of the party.

##### 1.2 App's Functionality  
*Provide here an overview of the system and what the overall intention of the system is.*
With this app the user will be able to request any song to the DJ, using an input field or select via pre-determined options.
      
##### 1.3 User Interfaces   
*Provide here a brief description of how the user will interact with the system.*
The goal is to have an interface with big buttons and text, that helps user from all ages to use it easily.

### 2. System Requirements  


##### 2.1 Functional Requirements
*List here the functional requirements of the system. Functional requirements are requirements that specify __what__ the system should do and can be thought of as 'the system must do <requirement\>'. Implementation details for each requirement should be addressed in the system design document. An example of a functional requirement would be 'the system utilizes Java version...' This list can become quite extensive and for best practice each requirement should be issued its own unique name, number, and be accompanied by a description.*
Use React Native and Expo Framework
Some sort of websocket connection (firebase? graphql? )
Simple database for storing party details (firebase?, mongodb?)
React Context

#####2.2 Non-Functional Requirements
*List here the non-functional requirements of the system. Non-Functional requirements are requirements that specify __how__ the system should act and can be thought of as 'the system shall be <requirement\>'. An example of a non-functional requirement would be 'the system input should be able to handle any file smaller than...'*
- Make a song request
- View current playing song
- Vote on songs
