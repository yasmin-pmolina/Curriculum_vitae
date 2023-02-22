import React from 'react';

/**
 * 
 * @param {Array} headers        [<strong>Header 1</strong>, 'Header 2', 'Header 3'];
 * @param {HTMLElement} rows     ['Vertical Header 1', <strong>1</strong>, <em>2</em>, <u>3</u>],
 *                               ['Vertical Header 2', <strong>4</strong>, <em>5</em>, <u>6</u>],
 * @param {HTMLElement} verticalHeader 
 * @param {HTMLElement} HTMLElement ¨
 *  @param {string} className 
 * @returns {HTMLElement}
 */
function TableComponent({ headers, rows, verticalHeader, classNameTable }) {
  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {headers.map((header, index) => {
            const rowSpan = index === 0 && verticalHeader ? rows.length + 1 : 1;
            return <th key={`header-${index}`} rowSpan={rowSpan}>{header}</th>
          })}
        </tr>
      </thead>
    );
  };

  const renderVerticalHeader = () => {
    return (
      <tbody>
        {rows.map((row, index) => (
          <tr key={`row-${index}`}>
            <th>{row[0]}</th>
            {row.slice(1).map((column, index) => (
              <td key={`column-${index}`}>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderHorizontalHeader = () => {
    return (
      <tbody>
        {headers.slice(1).map((header, index) => (
          <tr key={`header-${index}`}>
            <th>{header}</th>
            {rows.map((row, index) => (
              <td key={`column-${index}`}>{row[index+1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className={`${classNameTable}`}>
      {verticalHeader && renderVerticalHeader()}
      {renderHeader()}
      {!verticalHeader && renderHorizontalHeader()}
    </table>
  );
}

export default TableComponent;