const AiTools = () => {
  const categories = [
    {
      id: "clnoswfv20000v7v4u78tl28q",
      name: "Technology",
      subcategories: ["Software", "Hardware", "Gadgets"],
    },
    {
      id: "anotherCategoryId",
      name: "Science",
      subcategories: ["Physics", "Chemistry", "Biology"],
    },
    {
      id: "yetAnotherCategoryId",
      name: "Food",
      subcategories: ["Recipes", "Cooking Tips", "Restaurant Reviews"],
    },
    {
      id: "categoryFourId",
      name: "Travel",
      subcategories: ["Destinations", "Travel Tips", "Accommodations"],
    },
    {
      id: "categoryFiveId",
      name: "Sports",
      subcategories: ["Football", "Basketball", "Soccer"],
    },
    {
      id: "categorySixId",
      name: "Music",
      subcategories: ["Rock", "Pop", "Jazz"],
    },
    {
      id: "categorySevenId",
      name: "Art",
      subcategories: ["Painting", "Sculpture", "Photography"],
    },
  ];
  return (
    <div>
      <h3 className="text-secondary text-xl font-bold">All Categories</h3>
      <p>Browse all ai categories at one glance.</p>
      <div>
        {categories ? (
          categories.map((category) => (
            <div className=" my-6" key={category.id}>
              <h3 className="my-2 text-secondary font-bold text-xl">{category.name}</h3>
              {category.subcategories.map(sub=><a 
              href={`/?subcategories=${sub}`}
              className="text-xl block "
              key={sub}> {sub}
              </a>)}
            </div>
          ))
        ) : (
          <p>not available</p>
        )}
      </div>
    </div>
  );
};

export default AiTools;
