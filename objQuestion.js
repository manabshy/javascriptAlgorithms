const obj = {

    x: 1,
    getX() {
        const inner = function () {
            console.log(this.x);
        }
        inner();
    }
};

obj.getX();  // Will print undefined

// Three Possible fixes below : => 
const obj1 = {

    x: 1,
    getX() {
        const that = this;
        const inner = function () {
            console.log(that.x);
        }
        inner();
    }
};

obj1.getX(); // Will print 1

const obj2= {

    x: 1,
    getX() {
        const inner =  () => console.log(this.x)
        inner();
    }
};

obj2.getX(); // Will print 1

const obj3= {

    x: 1,
    getX() {
        const inner =  () => console.log(this.x)
        inner.call(this);
    }
};

obj3.getX(); // Will print 1
