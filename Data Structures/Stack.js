module.exports = class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop
    }
    size(){
        return this.items.length
    }
    peek(element){
        return this.items.indexOf(element)
    }
}