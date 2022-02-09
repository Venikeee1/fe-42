export const HeroView = hero => {
  const { localized_name, roles } = hero;
  const heroRoles = roles.join(', ');

  return `
    <div class="hero">
      <h2>Hero name: ${localized_name}</h2>
      <div>Roles: ${heroRoles}</div>
    </div>
  `;
};
