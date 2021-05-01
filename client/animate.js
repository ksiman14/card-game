export const turn = (node) => {
  const st = window.getComputedStyle(node, null);
  const tr = st.getPropertyValue('transform');

  let values = tr.split('(')[1];
  values = values.split(')')[0];
  values = values.split(',');

  const a = values[0];
  const b = values[1];

  const scale = Math.sqrt(a * a + b * b);
  const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

  return angle;
};
