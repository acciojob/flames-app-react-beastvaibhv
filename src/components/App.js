import React, { useState} from "react";
import '../styles/App.css';

const App= ()=> {
    const[firstName, setFirstName] = useState("");
    const[secondName, setSecondName] = useState("");
    const[answer, setAnswer] = useState("");

    const handleClear = ()=>{
        setFirstName("");
        setSecondName("");
        setAnswer("");
    }
    const handleRelationship =()=>{
        const f1 = firstName.toLowerCase();
        const f2 = secondName.toLowerCase();

        if(f1.length === 0 || f2.length === 0){
            setAnswer("Please Enter valid input");
            
       }
       else{
        let count = countUncommonAlphabets(f1, f2);
        
        switch (count % 6) {
            case 0:
              setAnswer("Siblings");
              break;
            case 1:
              setAnswer("Friends");
              break;
            case 2:
              setAnswer("Love");
              break;
            case 3:
              setAnswer("Affection");
              break;  
            case 4:
              setAnswer("Marriage");
              break;
            default:
              setAnswer("Enemy")
              
          }
        }
          
          setFirstName("");
          setSecondName('');

    }
    function countUncommonAlphabets(word1, word2) {
      const count = new Map();
      let totalLength = word1.length + word2.length;
      for(let char of word1){
        count.set(char, (count.get(char) || 0) + 1);
      }
      for(let char of word2){
        if(count.has(char) && count.get(char)> 0){
             count.set(char, (count.get(char) -1 ));
             totalLength -= 2;
        }
      }
      return totalLength ;
    }

        return(
            <div id="main">
                <div>
                    <input 
                    name ="name1"
                type="text" 
                data-testid="input1" 
                onChange={(e)=>{setFirstName(e.target.value)}}
                value ={firstName}/>

               <input 
               name = "name2"
               data-testid="input2" 
               type="text" 
               onChange={(e)=>{setSecondName(e.target.value)}}
               value ={secondName}/>

               <button 
               data-testid="calculate_relationship" 
               onClick={handleRelationship}>
                Calculate Relationship Future
                </button>
               <button 
               data-testid="clear" 
               onClick={handleClear}>
                Clear
                </button>
                </div>
               <div><h3 data-testid="answer">{answer}</h3></div>
               
            </div>
        )
    
}


export default App;