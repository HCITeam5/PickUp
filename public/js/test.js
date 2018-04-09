var app = angular.module('myApp', ['ngResource']);

app.controller('accordion', function($scope) {
    $scope.accordions = [

        {
            "title": "What is PickUp?",
            "info": "PickUp is an application aimed at connecting student riders and drivers to reach their destination. The app provides information about the driver, including first name, vehicle type, and license plate number. The driver will be able to set a pick-up and drop-off location, pick-up time, number of seats available, and price.  Use the application to search for rides in the preferred pickup and drop off location, during your preferred time, to view driver postings based on your search results.  The user will have the opportunity to contact the driver in order to confirm the details of the ride.",
            "href": "collapse2",
            "id": "collapse2"
        },
    {
            "title": "Is the application free?",
            "info": "There is no charge to create an account. The cost of the ride depends on the price set by the driver, depending on the location and travel time. We accept Visa, MasterCard, and PayPal. When you create an account your payment method is saved automatically. You can update your payment method at any time on the profile settings page.",
            "href": "collapse1",
            "id": "collapse1"
        },
        {
            "title": "Do I need an account?",
            "info": "To enhance your PickUp experience and help you stay secure, you will to create an account to easily manage, create and find rides. The account will also allow you to track and update your personal information.",
            "href": "collapse3",
            "id": "collapse3"
        },
        {
            "title": "How do I contact the driver?",
            "info": "Once the user specifies the details of their ride, they will be presented with the results as well as an option to “contact” the driver. From there they will be able to communicate with the driver and be presented with the option of accepting or declining the ride based on their preference.",
            "href": "collapse4",
            "id": "collapse4"
        },
        {
            "title": "How do I create a PickUp account?",
            "info": "Creating a PickUP account requires a first name and last name, valid email, and password. You will also need to specify whether you are registering as a driver, who offers rides, or a rider who requests rides. You will have the opportunity to change this in your profile page.",
            "href": "collapse5",
            "id": "collapse5"
        },
        {
            "title": "How is this different than services like Uber/Lyft?",
            "info": "PickUp does not have a standard rate, which makes it an ideal option for longer distance travelling. It allows you to share rides with other students, creating a safer and more reliable environment.",
            "href": "collapse6",
            "id": "collapse6"
        }
    ];
    // console.log($scope.accordions);
});

app.controller('about', function($scope) {
    $scope.about = [{
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    }];
    // console.log($scope.about);
});

app.controller('team', function($scope) {
    $scope.teams = [{
            "name": "Yusra Al-Sharafi",
            "title": "CEO",
            "img": "img/team_circle.png"
        },
        {
            "name": "Alaa Darwech",
            "title": "CEO",
            "img": "img/team_circle.png"
        },
        {
            "name": "Matthew Dudycz",
            "title": "CEO",
            "img": "img/team_circle.png"
        }, {
            "name": "Haris Iftikhar",
            "title": "CEO",
            "img": "img/team_circle.png"
        }, {
            "name": " Neeraja Murali Dharan",
            "title": "CEO",
            "img": "img/team_circle.png"
        }, {
            "name": "Pearson Radu",
            "title": "CEO",
            "img": "img/team_circle.png"
        }
    ];
    // console.log($scope.about);
});

app.controller('footer', function($scope) {
    $scope.footer = [{
        "main": "2018 PickUp. All Rights Reserved."
    }];
    // console.log($scope.footer);
});