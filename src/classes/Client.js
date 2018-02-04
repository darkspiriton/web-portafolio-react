class Human {
  type = 'General'
}

class Client extends Human {
  age = 20

  constructor(name,type = null) {
    super()
    if(type){
      this.type = type
    }
    this.name = name
  }

  getName = () => {
    console.log(`Tu nombre es ${this.name}`)
  }
}

export default Client
