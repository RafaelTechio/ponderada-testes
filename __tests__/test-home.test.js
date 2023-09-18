const axios = require("../axios");


describe('testing courses request (HOME)', () => {
    it('should receive an status code 200', async () => {
        const response = await axios.get('/courses');

        expect(response.status).toBe(200);
    })

    it('should match request format', async () => {
        const response = await axios.get('/courses');
        const data = JSON.parse(response.data);

        expect(Array.isArray(data)).toBe(true);
        
        data.map(course => {
            expect(typeof course.id).toBe('number');
            expect(typeof course.name).toBe('string');
            expect(typeof course.observation == 'string' || course.observation === null).toBe(true);
            expect(typeof course.order).toBe('number');
            expect(typeof course.createdAt).toBe('string');
            expect(typeof course.updatedAt).toBe('string');
            expect(typeof course.projectsKPIs == 'object' && !!course.projectsKPIs).toBe(true)
            expect(Array.isArray(course.projectsKPIs.businessTypes)).toBe(true),
            course.projectsKPIs.businessTypes.map(sector => {
                expect(typeof sector.name).toBe('string')
                expect(typeof sector.amount).toBe('number')
            })
            expect(Array.isArray(course.projectsKPIs.businessSectors)).toBe(true)
            course.projectsKPIs.businessSectors.map(sector => {
                expect(typeof sector.name).toBe('string')
                expect(typeof sector.amount).toBe('number')
            })
        });
    })
});