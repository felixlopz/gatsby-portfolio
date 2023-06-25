const useYearsOld = (birthDate: Date = new Date(1998, 8, 15)) => {
  const diff_ms = Date.now() - birthDate.getTime();
  const age_dt = new Date(diff_ms);
  const yearsOld = Math.abs(age_dt.getUTCFullYear() - 1970);
  return { yearsOld };
};

export default useYearsOld;
