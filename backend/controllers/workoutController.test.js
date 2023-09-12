const workoutController = require('./workoutController');
//const validateID = workoutController.validateID({id:'63f5cb3801753708f42761a5'},{message:'Dette er en test'},{res:''});
const getWorkout = workoutController.getWorkout;
const getAllWorkouts = workoutController.getAllWorkouts;
const createWorkout = workoutController.createWorkout;
const { mockRequest, mockResponse } = require('../util/interceptor')


jest.setTimeout(60000);


describe("Check function \'createWorkout\' ", () => {
  test('should 200 and return correct value', async () => {
    let req = mockRequest();
    req.params.id = '61';
    const res = mockResponse();

    await getWorkout(req, res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status(404).json).toHaveBeenCalledWith({error: "ID spesifisert er ikke gyldig"});
  });
})


/*
describe("Check function \'getAllWorkouts\' ", () => {
  test('should 200 and return correct value', async () => {
    let req = mockRequest();
    //req.params.id = '61';
    const res = mockResponse();

    await getAllWorkouts(req, res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status(404).json).toHaveBeenCalledWith({error: "ID spesifisert er ikke gyldig"});
  });
})
*/

describe("Check function \'createWorkout\' ", () => {
  test('TEST 1, should 200 and return correct value', async () => {
    
    let req = mockRequest();
    req.body.tittel ='benk';
    req.body.sett = 12;
    req.body.repetisjoner = 13; 
    req.body.vekt = 100;
    const res = mockResponse();
    await createWorkout(req, res);


    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status.mock.calls.length).toBe(1);
    expect(req.body.tittel).toBe('benk');
    expect(req.body.sett).toBe(12);
    expect(req.body.repetisjoner).toBe(13);
    expect(req.body.vekt).toBe(100);
    //expect(res.status(200).json).toHaveBeenCalledWith('yo');
  });
})


/*
describe("Check function \'validateID\' ", () => {
  test('should 200 and return correct value', () => {
    let id = '63f5cb3801753708f42761a5';
    let message = 'Dette er en test'
    const res = mockResponse();

    validateID(id,message,res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status(404).json).toHaveBeenCalledWith({error: "ID spesifisert er ikke gyldig"});
  });
})

*/
/*

describe("Check function \'getWorkout\' ", () => {
  test('TEST 2, should 200 and return correct value', async () => {
    let req = mockRequest();
    req.params.id = '63de85f61be0fe13117db866';
    const res = mockResponse();

    await getWorkout(req, res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status(200).json(res)).toHaveBeenCalledWith({error: "ID spesifisert er ikke gyldig"});
  });
})
*/







  //Tror vi må ha verdier i databasen for at denne skal kjøre
/*
  test('test 2', async () => {
    let req = mockRequest();
    req.params.id = '63de85f61be0fe13117db866';
    const res = mockResponse();

    await getWorkout(req, res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.send.mock.calls.length).toBe(0);
    expect(res.status(404).json).toHaveBeenCalledWith({error: "Fant ikke okten med id %s", id});
  });

*/

/*

describe("Check function \'getAllWorkouts\' ", () => {
  test('should 200 and return correct value', async () => {
    let req = mockRequest();
    const res = mockResponse();

    await getAllWorkouts(req, res);

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status.mock.calls.length).toBe(1);
  });
})

*/


  //
  /*




})





//test('Dette er min første test', () => {
  //  expect(getWorkout()).toBe("")
//})



describe('61834610', () => {

  
  it('test is failing', async () => {
    const mReq = { params: {} };
    const mRes = {};
    //const mNext = jest.fn();
    await getAllWorkouts(mReq, mRes);
    expect(mRes).toBeCalledWith(new Error('invalid.'));
  });

  it('should throw 400 error if id is empty string', async () => {
    const mReq = { params: { id: '' } };
    const mRes = {};
    //const mNext = jest.fn();
    await getWorkout(mReq, mRes);
    //expect(mRes).toBeCalledWith(new Error('invalid.'));
  });
})

/*



  it('should throw 400 error if id is invalid format', async () => {
    const mReq = { params: { id: '$$' } };
    const mRes = {};
    const mNext = jest.fn();
    await retrieveMember(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error('invalid format.'));
  });



  it('should retrieve one member by id and send response correctly', async () => {
    const mMemberRecord = { id: '1', username: 'KF1' };
    jest.spyOn(MemberService, 'retrieveOneMember').mockResolvedValueOnce(mMemberRecord);
    const mReq = { params: { id: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await retrieveMember(mReq, mRes, mNext);
    expect(MemberService.retrieveOneMember).toBeCalledWith('1');
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.send).toBeCalledWith({ member_detail: { id: '1', username: 'KF1' } });
  });
});


//Kilde: https://you.com/search?q=how%20to%20test%20a%20controller%20function%20with%20jest
*/