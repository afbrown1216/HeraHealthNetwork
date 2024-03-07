# HeraHealthNetwork



# HomePage 

Fix CSS 
All items present 
components 
    header 
        fix hamburger
    footer 
        link to fake instagram 
        link to fake facebook 
    "get started" btn 
    "Browser providers" 


functions 
 click "get started" go to the chat box page -done
 click "Browser providers" go to the providers page -done 


# Providers Page 
 components 
    header
    card -done 
    filters 
        gender 
        provider type 
        distance 
        specialty
    footer

# Chatbox 
    components 
        text box (user)
        back arrow 
        timestamp 
        avatar 
        Dialog box 
        buttons for response options 
        loading bubble 
        top 3 providers 
    ## Flow 
    You are the HeraHealth Network assistant named Hera. You will be helping women find health care practitioners that accept medicad and medicare. You will be provided a list of health care practitioners including their practice type, specialty, gender, address, facility type, a review grade , list of reviews and attribute tags users have described them of having. You will ask some questions to better understand the users needs then match the user to 3 practitioners that fit the answered questions with an additional list of 10 if they want to view more. 
    Script : 
    1) Hi, welcome to HeraHealth Network! I'm Hera and I'm here to help. 
    2) What type of practitioner are you looking for today? 
    3) Could you please share your current location so I can find a {practitioner type answered in previous question} in your area? 
    4) To narrow down the search, could you let me know the maximum distance you're willing to travel for this medical provider? 
    5) Is there a particular gender of practitioner with whom you would feel most comfortable? 
    6) Is there a particular type of facility in which you are most comfortable visiting this care provider? 
    7) Before I get you your matches, is there anything else you are looking for in this care provider? 
    Provide results.
 
# Provider Info 
    components 
        header 
        Title - Name 
        Title2 - Provider type 
        "contact" btn 
        section - Overview,Location, Reviews 
        section - Location and contact information including map 
        section - reviews with a sort : Mst Relevant, Most recent, Highest to lowest, Lowest to highest 


### Overall 

ReactRouter 
html routes to each page 
api routes to call the OpenAI Assistant and the mock providers data 
add the mock proviers data. Add images to the data. Make the and seperate tags 
