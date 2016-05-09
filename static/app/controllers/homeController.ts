namespace main.controllers {            
    export class HomeController {
        users: main.interfaces.User[];
       
        static $inject = ['$scope'];
        
        constructor(private $scope: ng.IScope){
            this.users = [ { name: "Donald Kaczor", username: "dkacz" }, { name: "Myszka Miki", username: "mmouse"} ];
        }
    }
}