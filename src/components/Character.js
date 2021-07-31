// Write your Character component here
import React from 'react';

 const Character = bl => {
     console.log(bl);
    //   const [friends, key] = bl;
    // const charter = [1,2,3,4]

    return(
        <div>
            {bl.friends.map(c => {
                return <h1>{c.name}            {c.birth_year}</h1>
            })}
        </div>
    )
};
export default Character;