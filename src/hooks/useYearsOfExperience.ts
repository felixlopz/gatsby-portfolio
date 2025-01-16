const useYearsOfExperience = (startingDate = new Date("10/01/2020")) => {
  const yearsOfExperience =
    new Date().getFullYear() - startingDate.getFullYear();

  return { yearsOfExperience };
};

export default useYearsOfExperience;
