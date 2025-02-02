### Documentation for Office Management Application

---

### **Overview**

The **Office Management Application** is designed for managing office spaces, their staff members, and associated details. The app allows users to:

- View a list of office spaces.
- View and edit details for each office space.
- Add new office spaces and staff members.
- Edit or delete staff members.
- Use search functionality to filter staff members in real time.
- Manage office-related tasks with modal dialogs that handle user input.

This app is built using **Vue 3** (latest version 3.5) and **Vite** for fast build times. It is responsive, supports all devices, and is deployed on **GitHub Pages**. The app uses **Vuex** for state management and includes **Axios** for handling HTTP requests.

---

### **How to Use the Application**

1. **Main Page (Office List)**
   - The main page displays a list of added office spaces.
   - Each office card has the following options:
     - **Expand Details:** Clicking the **More Details** button reveals the contact information for that office.
     - **Edit Office:** Clicking the **Edit** button allows users to edit the office details (name, color, etc.).
     - **Create Office:** Users can create a new office by clicking the "Create New Office" button.
2. **Office Details Page**
   - Clicking on an office card from the main page takes the user to the **Office Details Page**.
   - On this page, users can view:
     - The **office details card** showing information such as office name and color.
     - A **search component** that allows users to search for staff members.
     - A list of **staff members** in that office, including their avatar, name, and a **more options button** (three dots) for editing or deleting that staff member.
3. **Staff Management**
   - **Create Staff:** On the office details page, users can add a new staff member by clicking the "Add New Staff" button.
     - A modal will appear with fields for entering the staff member’s details.
   - **Edit Staff:** Clicking the **Edit** option for a staff member opens a modal where users can modify the staff member’s details.
   - **Delete Staff:** Clicking the **Delete** option for a staff member will prompt the user with a confirmation message.
4. **Search Functionality**

   - Users can search for staff members by typing in the search bar.
   - The search results are updated in real time as the user types, filtering staff members based on their name and other details.

5. **Modals**
   - The app uses modals for creating and editing staff members and office spaces. When the user submits a form in the modal:
     - Required fields must be filled in to successfully submit.
     - Appropriate warnings or error messages will be displayed for incomplete fields.

---

### **Steps for Setting Up the Project**

1. **Clone the Repository**

   - Clone the repository from GitHub using the following command:
     ```
     git clone https://github.com/Coisdt/office-management-app.git
     ```

2. **Install Dependencies**

   - Navigate to the project folder:
     ```
     cd office-management-app
     ```
   - Install the necessary dependencies:
     ```
     npm install
     ```

3. **Start the Development Server**
   - Start the app using Vite:
     ```
     npm run dev
     ```
   - The app should now be running at `http://localhost:(portname)`.

---

### **Features Implemented**

1. **Vue 3 Features Used:**
   - **Teleport** for rendering components outside the current DOM hierarchy.
   - **Vue Router** for navigating between pages.
   - **Vuex** state management for handling global state across components.
2. **Components:**
   - **OfficeCard:** Displays information about each office.
   - **OfficeDetails:** Shows detailed information about a specific office and its staff.
   - **StaffCard:** Displays information about a staff member.
   - **Search:** A search input that filters staff members in real-time.
   - **Modal:** A reusable modal for adding or editing office details and staff members.
3. **State Management (Vuex):**
   - **Offices Module:** Handles the state of office spaces and their related data.
   - **Staff Module:** Manages staff-related data, including creation, editing, and deletion.
4. **Axios Mock Server:**
   - Mock server set up for simulating HTTP requests for offices and staff.

---

### **Future Improvements**

- **UI Enhancements:**
  - Revamp the desktop and tablet views for a better user experience.
  - Implement toast notifications for actions like adding or editing an office or staff member.
- **Code Improvements:**
  - Separate endpoints into a dedicated **api** file for better organization.
  - Split the **Vuex** store into two modules for offices and staff for better maintainability.

---

```markdown
# Office Management Application

## Overview

The Office Management Application allows users to manage office spaces and staff members. It supports creating, editing, and deleting office spaces and staff members. It also provides real-time search functionality for staff members within each office.

## Tech Stack

- **Vue 3** (latest version 3.5)
- **Vite** (for fast builds)
- **Vuex** (for state management)
- **Axios** (for HTTP requests)
- **Tailwind CSS** (for styling)
- **Font Awesome** (for icons)
- **GitHub Pages** (for deployment)

## Features

- View office spaces and staff members.
- Add
```
