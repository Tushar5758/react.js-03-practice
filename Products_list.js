import Product from "./product";

function Products_list()
{


    let products=[
        {id:1,day:"Day 1",topic:" Introduction to React.js",url:'https://res.cloudinary.com/practicaldev/image/fetch/s--sKrsznYY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/inup1q3e4h5zd9fhs1iw.jpg'},
        {id:2,day:"Day 2",topic:"Event Handling",url:'https://res.cloudinary.com/practicaldev/image/fetch/s--G6SX4jeC--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q465hq6aef7juuh5d7bd.jpg'},
        {id:3,day:"Day 3 ",topic:"States",url:'https://2.bp.blogspot.com/--TQzj9iIKE0/T_AEV-S95VI/AAAAAAAAA2Q/SYte9xh58lU/s1600/zzday3.gif'}
    ]

    return (

        <div className="parent">
        
            {
                
                products.map((p)=>
                {
                    
                    return (
                    <Product day={p.day} topic={p.topic} url={p.url} key={p.id}/>
                    );
                    
                })
            
            }
        
        </div>
  
    );
}

export default Products_list;