import { faker } from '@faker-js/faker';

import { UserEntity } from '@/users/domain/entities/user.entity';
describe('UserEntity', () => {
	it('should be defined and have the correct props', () => {
		const props = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		const sut = new UserEntity(props);

		expect(sut).toBeDefined();
		expect(sut.props).toBe(props);
		expect(sut).toBeInstanceOf(UserEntity);
	});
});
