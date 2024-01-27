const MessageLeft = () => {
  return (
    <div className="md:w-1/2">
        <h1 className=" font-semibold mb-4">People Usually ask here</h1>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How can i cancel my order?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, velit adipisci vero dicta numquam a repudiandae ad nulla, pariatur ab officia perspiciatis itaque fuga! In, eaque voluptas. Voluptatem, itaque iste.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
         Why is my registration delayed?
        </div>
        <div className="collapse-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium harum sed laborum quod unde vitae! Ipsa corporis quia iusto blanditiis illo. Necessitatibus, magnam reprehenderit. Aspernatur quasi quisquam eligendi explicabo!</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can i track an order?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas animi dicta, sequi delectus earum architecto molestiae possimus eius quod ut iusto repellendus dolore maiores nam? Commodi magnam placeat accusamus.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can i get money back?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas animi dicta, sequi delectus earum architecto molestiae possimus eius quod ut iusto repellendus dolore maiores nam? Commodi magnam placeat accusamus.</p>
        </div>
      </div>
    </div>
  );
};

export default MessageLeft;
