function FruitDetail({data}){
  return(
    <div className="col-md-6">
          <h4 className="pt-5">{data[0].title}</h4>
          <p>{data[0].content}</p>
          <p>{data[0].price}</p>
      </div> 
  )
};

export default FruitDetail;
