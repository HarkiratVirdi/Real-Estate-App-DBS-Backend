const staffQueries = {
  getAllStaff: () => 'select * from dh_staff',
};

const branchQueries = {
  getAllBranches: () => {},
};

const clientQueries = {
  getAllClients: () => {},
};

module.exports = { staffQueries, branchQueries, clientQueries };
