import React from 'react';

function RecentActivityItem({ item }) {
    const highlightIndex = item.content.indexOf(item.highlight);
    const hasHighlight = highlightIndex !== -1;

    return (
        <div className='activity-item d-flex'>
            <div className='activity-label'>{item.time}</div>
            <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>

            <div className='activity-content'>
                {hasHighlight ? (
                    <>
                        {item.content.substring(0, highlightIndex)}
                        <a href='#' className='fw-bold text-dark'>
                            {item.highlight}
                        </a>
                        {item.content.slice(highlightIndex + item.highlight.length)}
                    </>
                ) : (
                    item.content
                )}
            </div>
        </div>
    );
}

export default RecentActivityItem;
