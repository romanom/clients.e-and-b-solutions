import React from 'react';
import widgets from '../content/widgets';

const WidgetsSection = () => (
    <section id="widgets">
        <div className="widgets_row">
            {widgets.map((widget, index) => (
                    <div key={index} className="widget">
                        <img src={widget.image} alt={widget.alt} />
                        <h4>{widget.title}</h4>
                        <p>{widget.content}</p>
                    </div>
                ))}
        </div>
    </section>
);

export default WidgetsSection;
