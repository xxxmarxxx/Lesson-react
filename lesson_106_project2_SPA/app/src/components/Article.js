import React from 'react';

const Article = ({title,autor,text}) => {

    const style = {
        marginTop: 40
    }

    return ( 
        <article style={style}>
            <h3 style={{
                marginBottom: 3, 
                textTransform: "uppercase"
                }}>{title}</h3>
    <span style={{
        display:"block",
        marginBottom: 10,
        fontSize: 14
        }}>
            {autor}
            </span>
            <p style={{
                fontSize:16,
                paddingBottom:20,
            }}>{text}</p>
        </article>
     );
}
 
export default Article;