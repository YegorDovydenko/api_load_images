const ContentList = ({ content }) => {
  return (
    <ul>
      {
        content.map((item, key) => {
          return (
            <img key={key} src={item.image} alt={`person-${key}`} />
          )
        })
      }
    </ul>
  );
};

export default ContentList;
