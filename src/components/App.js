import React, { useState} from "react";
import '../styles/App.css';

const App= ()=> {
    const[firstName, setFirstName] = useState("");
    const[secondName, setSecondName] = useState("");
    const[ans, setAns] = useState("");

    const handleClear = ()=>{
        setFirstName("");
        setSecondName("");
        setAns("");
    }
    const handleRelationship =()=>{
        if(firstName.length === 0 || secondName.length === 0){
             setAns("Please Enter valid input");
        }
        const f1 = firstName.toLowerCase();
        const f2 = secondName.toLowerCase();

        const count = countUncommonAlphabets(f1, f2);
        
        switch (count % 6) {
            case 0:
              setAns("Siblings")
              break;
            case 1:
              setAns("Friends" )
              break;
              
            case 2:
              setAns("Love")
              break;
            case 3:
              setAns("Affection")
              break;
                
            case 4:
              setAns("Marriage")
              break;
            
            
            default:
              setAns("Enemy")
              
          }
          
          setFirstName("");
          setSecondName('');

    }
    function countUncommonAlphabets(word1, word2) {
      const count = new Map();
      let totalLength = word1.length + word2.length;
      for(let char in word1){
        count.set(char, (count.get(char) || 0) + 1);
      }
      for(let char in word2){
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
                type="text" 
                data-testid="input1" 
                onChange={(e)=>{setFirstName(e.target.value)}}
                value ={firstName}/>

               <input 
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
               <div data-testid="answer"><h3>{ans}</h3></div>
               
            </div>
        )
    
}


export default App;