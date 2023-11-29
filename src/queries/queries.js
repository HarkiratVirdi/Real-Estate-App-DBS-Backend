const staffQueries = {
  getAllStaff: () => 'select * from dh_staff',
  addNewStaff: () => '',
  deleteStaff: () => '',
  updateStaff: (newSalary, telephone, email, staffId) =>
    `Update dh_staff SET Salary='${newSalary}', Telephone='${telephone}', email='${email}' where staffNo='${staffId}'`,
};

const branchQueries = {
  getAllBranches: () => 'select * from dh_branch',
  getBranchById: (branchId) =>
    `select * from dh_branch where branchno='${branchId}'`,
  updateBranchDetails: (city, street, postcode, branchId) =>
    `Update dh_branch SET CITY='${city}', STREET='${street}', POSTCODE='${postcode}' where branchno='${branchId}'`,
  addNewBranch: (branchno, street, city, postCode) => `INSERT INTO dh_branch(
      BRANCHNO,
      STREET,
      CITY,
      POSTCODE
  )
  VALUES (
    '${branchno}', '${street}', '${city}', '${postCode}'
  )`,
};

const clientQueries = {
  getAllClients: () => 'select * from dh_client',
  updateClient: (fname, lname, telno, city, street) =>
    `Update dh_staff SET FNAME='${fname}', LNAME=${lname}, TELNO=${telno}, CITY=${city}, STREET=${street} where staffId='${staffId}'; Commit;`,
  addNewClient: (
    CLIENTNO,
    FNAME,
    LNAME,
    TELNO,
    STREET,
    CITY,
    EMAIL,
    PREFTYPE,
    MAXRENT
  ) => `INSERT INTO dh_client(
    CLIENTNO,
    FNAME,
    LNAME,
    TELNO,
    STREET,
    CITY,
    EMAIL,
    PREFTYPE,
    MAXRENT
)
VALUES (
  '${CLIENTNO}', '${FNAME}', '${LNAME}', '${TELNO}', '${STREET}', '${CITY}', '${EMAIL}', '${PREFTYPE}', '${MAXRENT}'
)`,
};

module.exports = { staffQueries, branchQueries, clientQueries };
