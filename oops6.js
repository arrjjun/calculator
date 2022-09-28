
//inheritance - classical-inheritance.

//parent -> child
class parent{
    bike(){
        return 'duke'
    }
}
class child extends parent{

}
ch=new child ();//object
console.log(ch.bike());