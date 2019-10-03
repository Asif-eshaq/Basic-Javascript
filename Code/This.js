var a = {
    name : 'The a object',
    log : function() {
        this.name = 'Updated a' ;
        console.log(this);

        var setname = function(newname) {
            this.name = newname;
        }
        setname('Updated again');
        console.log(this);
    }
}

a.log();