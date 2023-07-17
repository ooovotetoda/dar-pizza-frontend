import React from 'react';

const CafeOrder = () => {
  return (
    <section className={"cafe-order"}>
      <div className="cafe-block">
        <div className="cafe-order-header-wrap">
          <h2 className="cafe-order-header">Ваш Заказ</h2>
          <span className="cafe-order-edit">Edit</span>
        </div>
        <div className="cafe-order-items"></div>
      </div>
      <div className="cafe-text-field-wrap">
        <textarea className={'cafe-text-field'} rows={1} placeholder={"Добавить комментарий..."}></textarea>
        <div className="cafe-text-field-hint">Любые особые пожелания, детали, последние пожелания и т.д.</div>
      </div>
    </section>
  );
};

export default CafeOrder;